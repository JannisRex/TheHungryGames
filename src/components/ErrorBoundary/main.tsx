import React, { Component } from 'react'
import ErrSubstituteScreen from '../ErrSubstituteScreen/main'

// children => Node/any
type Props = {
  children: JSX.Element,
  ErrSubstituteScreen: typeof ErrSubstituteScreen,
  onError?: (error: Error, stackInfo: string)=> void,
  _handleCatchError: (error: Error)=> void
}

type State = {
  error: Error | null,
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  static defaultProps: any = {
    ErrSubstituteScreen: ErrSubstituteScreen
  }

  // fires error Event and catches err
  static getDerivedStateFromError(error: Error): {error: Error, hasError: boolean} {
    return { error, hasError: true }
  }

  constructor(props: any) {
    super(props)

    this.state = {
      error: null,
      hasError: false
    }
  }

  // mb replace return { error, hasError: true }
  // but cant get 'this' or pass functions to lifeCycleMethod
  _handleCatchError(error: Error): void {
    this.setState({
      error,
      hasError: true
    })
  }

  // mb switch cDidCatch to some async method for performance. But since its an edge case its okay
  componentDidCatch(error: Error, info: { componentStack: string }): void {
    if (typeof this.props.onError === 'function') {
      try {
        this.props.onError.call(this, error, info.componentStack)
      } catch (swallowedErr) {
        // shouldnt happen but w/e
      }
    }
  }

  _resetError: any = (): void => {
    this.setState({
      error: null,
      hasError: false
    })
  }

  render(): React.ReactNode | JSX.Element {
    const { ErrSubstituteScreen } = this.props

    return this.state.hasError
      ? <ErrSubstituteScreen
        error={this.state.error}
        resetError={this._resetError}
      />
      : this.props.children
  }
}

export default ErrorBoundary
