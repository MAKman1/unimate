class DataService {
    setItem(key: string, item: string): void {
        localStorage.setItem(key, item);
    }

    getItem(key: string): string {
        return localStorage.getItem( key);
    }

    removeItem(key: string): void {
        localStorage.removeItem( key);
    }
}
export default new DataService();