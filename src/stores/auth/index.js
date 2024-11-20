import { formatAccountBalance } from "../../lib/wallet/balance";
import { enableBittensorExtension } from "../../lib/wallet/connection";

const initialAuthState = {
  isLoggedIn: false,
  address: null,
  name: null,
  extension: null,
  error: null,
  balance: "0 TAO",
  isLoggingIn: false,
};

const createAuthSlice = (set) => ({
  authState: initialAuthState,
  authActions: {
    login: async () => {
      set((state) => {
        state.authState.isLoggingIn = true;
      });
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
        const balances = await formatAccountBalance(accounts[0].address);

        set((state) => {
          state.authState.extension = extension;
          state.authState.address = accounts[0].address;
          state.authState.name = accounts[0].name;
          state.authState.isLoggedIn = true;
          state.authState.balance = balances.free || "0 TAO";
          state.authState.isLoggingIn = false;
        });
      } catch (error) {
        console.error(error);
        set((state) => {
          state.authState.error = "Failed to login";
          state.authState.isLoggingIn = false;
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
