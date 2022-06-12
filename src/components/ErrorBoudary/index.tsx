import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
   children?: ReactNode;
}

interface State {
   hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
   public state: State = {
      hasError: false
   };

   public static getDerivedStateFromError(_: Error): State {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
   }

   public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error('Uncaught error:', error, errorInfo);
   }

   public render() {
      if (this.state.hasError) {
         return (
            <div>
               <h1> Sorry, something went wrong</h1>
               <p>We're working on getting this fixed as soon as we can.</p>
            </div>
         );
      }

      return this.props.children;
   }
}

export default ErrorBoundary;
