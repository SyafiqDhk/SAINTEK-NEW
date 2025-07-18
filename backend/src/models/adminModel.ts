export class AdminModel {
  private admins: Array<{ id: number; name: string; email: string }> = [];
  private currentId: number = 1;

  public async save(admin: {
    name: string;
    email: string;
  }): Promise<{ id: number; name: string; email: string }> {
    const newAdmin = { id: this.currentId++, ...admin };
    this.admins.push(newAdmin);
    return newAdmin;
  }

  public async find(
    id: number
  ): Promise<{ id: number; name: string; email: string } | null> {
    const admin = this.admins.find((admin) => admin.id === id);
    return admin || null;
  }

  public async delete(id: number): Promise<boolean> {
    const index = this.admins.findIndex((admin) => admin.id === id);
    if (index !== -1) {
      this.admins.splice(index, 1);
      return true;
    }
    return false;
  }

  public async getAll(): Promise<
    Array<{ id: number; name: string; email: string }>
  > {
    return this.admins;
  }
}

// Ekspor instance, bukan class
const adminModel = new AdminModel();
export default adminModel;
