

type LazyValue<TFuncOrResult, TArgs extends [] = []> =
    TFuncOrResult extends (...args: any) => infer QResult
    ? QResult | ((...args: TArgs) => QResult)
    : TFuncOrResult | ((...args: TArgs) => TFuncOrResult);
type Content<TArgs extends [] = []> = LazyValue<React.Component["render"], TArgs>;

export default function Lazy({
    open,
}: {
    open: boolean,
}) {

}
