import type {FC} from "react";
import type {IReactions} from "../../models/model-post.ts";

type PropsReactionsType = {
    reactions: IReactions
}

export const ReactionsComponent: FC<PropsReactionsType> = ({reactions}) => {
    return (
        <div>
            {
                Object.entries(reactions).map(([key, value]) => (
                    <p key={key}>
                        {key}: {value}
                    </p>
                ))
            }
        </div>
    );
};