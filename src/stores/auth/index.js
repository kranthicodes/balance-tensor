import { enableBittensorExtension } from "../../lib/wallet/connection";
import { ApiPromise } from "@polkadot/api";
const initialAuthState = {
  isLoggedIn: false,
  address: null,
  name: null,
  extension: null,
  error: null,
};

const createAuthSlice = (set) => ({
  authState: initialAuthState,
  authActions: {
    login: async () => {
      try {
        const extension = await enableBittensorExtension(
          window.location.origin
        );

        if (!extension) throw new Error("Failed to enable extension");
        // const api = await ApiPromise.create({});
        const accounts = await extension.accounts.get();
        // Retrieve the chain & node information via rpc calls
        // const [chain, nodeName, nodeVersion] = await Promise.all([
        //   api.rpc.system.chain(),
        //   api.rpc.system.name(),
        //   api.rpc.system.version(),
        // ]);
        // console.log({ chain, nodeName, nodeVersion });

        if (!accounts.length) throw new Error("No accounts found");
        set((state) => {
          state.authState.extension = extension;
          state.authState.address = accounts[0].address;
          state.authState.name = accounts[0].name;
          state.authState.isLoggedIn = true;
        });
      } catch (error) {
        console.error(error);
        set((state) => {
          state.error = "Failed to login";
        });
      }
    },
    logout: () =>
      set((state) => {
        state.authState = initialAuthState;
      }),
  },
});

export default createAuthSlice;
