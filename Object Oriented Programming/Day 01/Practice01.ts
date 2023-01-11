class Television {
  brand: string;
  size: number;
  resolution: string;
  connections: Array<string>;
  connectedTo: string;

  constructor (brand: string, size: number, resolution: string, connections: Array<string>) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;


    console.log(`New ${ brand } television created.`);
  }

  turnOn():void {
    console.log(this.brand, this.size, this.resolution, this.connections)
  }
}

const tv1 =  new Television('Samsung', 27, "4k", ["HDMI", "Ethernet", "DVI"])


tv1.turnOn()