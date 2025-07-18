class AdminService {
  private adminModel: any; // Replace 'any' with the actual type of your AdminModel

  constructor(adminModel: any) {
    this.adminModel = adminModel;
  }

  async createAdmin(adminData: any): Promise<any> {
    // Logic to create a new admin
    const newAdmin = await this.adminModel.save(adminData);
    return newAdmin;
  }

  async getAdmin(adminId: string): Promise<any> {
    // Logic to retrieve an admin by ID
    const admin = await this.adminModel.find(adminId);
    return admin;
  }

  async updateAdmin(adminId: string, adminData: any): Promise<any> {
    // Logic to update an existing admin
    const updatedAdmin = await this.adminModel.update(adminId, adminData);
    return updatedAdmin;
  }

  async deleteAdmin(adminId: string): Promise<any> {
    // Logic to delete an admin by ID
    await this.adminModel.delete(adminId);
    return { message: "Admin deleted successfully" };
  }
}

export default AdminService;
