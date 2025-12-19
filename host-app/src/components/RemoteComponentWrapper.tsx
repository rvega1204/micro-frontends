import React, { Suspense } from "react";

/**
 * Lazily loaded remote components from the remote_app micro-frontend.
 * These components are loaded at runtime via Module Federation.
 */
const RemoteHeader = React.lazy(() => import("remote_app/Header"));
const RemoteButton = React.lazy(() => import("remote_app/Button"));

/**
 * Loading spinner component displayed while remote components are being fetched.
 * Uses Tailwind CSS for styling with a spinning animation.
 */
const LoadingSpinner = () => (
  <div className="flex justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

/**
 * RemoteComponentWrapper
 *
 * A wrapper component that demonstrates Module Federation by loading and rendering
 * remote components from a separate micro-frontend application.
 *
 * Features:
 * - Lazy loads remote components using React.lazy() for code splitting
 * - Wraps each remote component in Suspense boundaries for graceful loading states
 * - Displays a loading spinner while remote components are being fetched
 * - Demonstrates inter-application component sharing in a micro-frontend architecture
 *
 * @returns A React component containing remotely loaded Header and Button components
 */
export const RemoteComponentWrapper = () => {
  return (
    <div className="p-4">
      <Suspense fallback={<LoadingSpinner />}>
        <RemoteHeader />
      </Suspense>

      <div className="mt-4">
        <Suspense fallback={<LoadingSpinner />}>
          <RemoteButton
            text="Remote Button"
            onClick={() =>
              alert(
                "Well done you've imported the MF remote component successfully"
              )
            }
          />
        </Suspense>
      </div>
    </div>
  );
};