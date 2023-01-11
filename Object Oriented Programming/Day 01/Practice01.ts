class Television {
  readonly brand: string;
  size: number;
  resolution: string;
  private _connections: Array<string>;
  private _connectedTo?: string;

  constructor (brand: string, size: number, resolution: string, connections: Array<string>) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this._connections = connections;


    console.log(`New ${ brand } television created.`);
  }

  turnOn():void {
    console.log(this.brand, this.size, this.resolution, this._connections)
  }

  get connectedTo(): string | undefined {
    return this._connectedTo
  }

  set connectedTo (connectionType: string | undefined) {
    if(!connectionType || !this._connections.includes(connectionType) ) {
      console.log('Sorry, connection unavailable');
      return 
    }
    this._connectedTo = connectionType
  }

}

const tv1 =  new Television('Samsung', 27, "4k", ["HDMI", "Ethernet", "DVI"])


tv1.turnOn()