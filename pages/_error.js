import React from "react"

const ErrorPage = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode}</h1>
      <p>This page could not be found</p>
    </div>
  )
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
