import { lazy } from "react";

const PushEvent = lazy(() => import(`./PushEvent`));
const ReleaseEvent = lazy(() => import(`./ReleaseEvent`));
const StatusEvent = lazy(() => import(`./StatusEvent`));
const NullEvent = lazy(() => import(`./NullEvent`));

export { PushEvent, ReleaseEvent, StatusEvent, NullEvent };
