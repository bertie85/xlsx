const Page = props => (
  <div className="container page">
    <p>This is the page component, that wraps all page contents directly</p>
    <h2>{props.title || ""}</h2>
    {props.children}
  </div>
)

export default Page;
