/* eslint-disable react/prop-types */

function ErrorMessage({ children }) {
    return (
        <p className="text-red-500 text-sm">{children}</p>
    )
}

export default ErrorMessage
