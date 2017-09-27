export class Task {
    id: string;
    note: string;
    status: string;

    constructor(id: string, note: string, status: string) {
        this.id = id;
        this.note = note;
        this.status = status;
    }
}