import React, { Suspense } from "react";
const ComponentA = React.lazy(() => import("./MyLib"));

export class MyCodeSpliting extends React.Component {
    public render = () =>
        <Suspense fallback={<div>Loading...</div>}>
            <ComponentA></ComponentA>
        </Suspense>
}