import { User, IdType } from "../shared/shared";
import MOCK_USERS from "../shared/mock-users";
import { UserRepository } from "./repository";
export const GOOGLE_BOOKS_API = 'https://www.googleapis.com/posts/v1/volumes?q=';

 class UserService {
    private repo = new UserRepository();
    constructor(private apiUrl: string) {
        MOCK_USERS.forEach(user => this.repo.add(user as User)); 
    }

    async getAllUsers() {
        const resp = await fetch('http://localhost:9000/api/users');
        const users = await resp.json();
        return users;
    }

    async createNewUser(user: User) {
        const resp = await fetch('http://localhost:9000/api/users', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
        });
        const created = await resp.json();
        return created;
    }

    async updateUser(user: User) {
        const resp = await fetch(`http://localhost:9000/api/users/${user.id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
        });
        const updated = await resp.json();
        return updated;
    }

    async deleteUser(userId: IdType) {
        const resp = await fetch(`http://localhost:9000/api/users/${userId}`, {
            method: 'DELETE',
            mode: 'cors'
        });
        const deleted = await resp.json();
        return deleted;
    }
}
export default new UserService(GOOGLE_BOOKS_API);