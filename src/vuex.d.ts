// vuex.d.ts
import { Store } from 'vuex'
import {RootState} from "@/types";

declare module '@vue/runtime-core' {

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<RootState>
    }
}
