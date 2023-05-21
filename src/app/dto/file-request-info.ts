export class FileRequest{

    //private String fileName;
    //private String fileLocation;
    //private byte[] data;
    //private UUID maintainer;

    fileName: string;
    fileLocation: string;
    data: Int16Array;
    maintainer:string;

    constructor(fileName: string, fileLocation: string, data: Int16Array, maintainer: string){

        this.fileName = fileName;
        this.data = data;
        this.fileLocation = fileLocation;
        this.maintainer = maintainer;

    }

}