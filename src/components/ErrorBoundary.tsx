import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    let displayMsg = error.message || 'An unexpected application error occurred.';
    try {
      const parsed = JSON.parse(error.message);
      if (parsed && typeof parsed.error === 'string') {
        displayMsg = `${parsed.error} (${parsed.operationType || 'operation'} on ${parsed.path || 'database'})`;
      }
    } catch {
      // keep raw message
    }
    return { hasError: true, message: displayMsg };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error('STEM Saathi ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F6F1E3] dark:bg-[#0F1F30] text-[#1A262C] dark:text-[#DCE5EC] flex items-center justify-center p-6">
          <div className="max-w-md w-full rounded-2xl border border-[#E6DEC8] dark:border-[#284766] bg-white dark:bg-[#152A40] p-6 space-y-4 shadow-sm">
            <h1 className="text-lg font-semibold text-[#17324D] dark:text-[#F6F1E3]">Workspace Recovery</h1>
            <p className="text-xs leading-relaxed text-[#3D4A50] dark:text-[#B4C5D4]">{this.state.message}</p>
            <button
              type="button"
              onClick={() => {
                this.setState({ hasError: false, message: '' });
                window.location.reload();
              }}
              className="rounded-lg bg-[#0F766E] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0B5F58] cursor-pointer transition-colors"
            >
              Reload STEM Saathi
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
