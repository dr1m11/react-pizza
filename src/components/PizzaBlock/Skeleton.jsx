import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className={"pizza-block"}
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="140" cy="130" r="130" />
        <rect x="0" y="274" rx="10" ry="10" width="280" height="27" />
        <rect x="0" y="314" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="426" rx="10" ry="10" width="91" height="27" />
        <rect x="127" y="414" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton
