export class FileResponse{

    //private UUID id;
    //private String fileName;
    //private byte[] data;
    //private UUID maintainer;

    id: string;
    fileName: string;
    data: Int16Array;
    maintainer: string;

    constructor(id: string, data: Int16Array, fileName: string, maintainer: string){
        this.id = id;
        this.fileName = fileName;
        this.data = data;
        this.maintainer = maintainer;
    }


}