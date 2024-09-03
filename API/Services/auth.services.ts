import * as SecureStore from "expo-secure-store";

class AuthService {
  tokenName = "mydesk-token";
  refreshTokenName = "refresh-mydesktoken";

  async signOut() {
    await this.removeToken();
  }

  async loggedIn() {
    const token = await this.getToken();
    return !!token;
  }

  async getToken() {
    const token = await this.getStorageItem(this.tokenName);
    return token;
  }

  async setToken(token: string | null) {
    await this.setStorageItem(this.tokenName, token);
  }

  async refreshToken(refreshtoken: string | null) {
    await this.setStorageItem(this.refreshTokenName, refreshtoken);
  }

  async getRefreshToken() {
    const refreshToken = await this.getStorageItem(this.refreshTokenName);
    return refreshToken;
  }

  async removeToken() {
    await this.removeStorageItem(this.tokenName);
    await this.removeStorageItem(this.refreshTokenName);
  }

  private async getStorageItem(key: string): Promise<string | null> {
    return SecureStore.getItemAsync(key);
  }

  private async setStorageItem(key: string, value: string | null) {
    if (value == null) {
      await this.removeStorageItem(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }

  private async removeStorageItem(key: string) {
    await SecureStore.deleteItemAsync(key);
  }
}

export default new AuthService();
