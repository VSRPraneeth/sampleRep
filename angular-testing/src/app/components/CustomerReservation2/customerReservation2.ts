export class CustomerReservation2 {
  hotelRoomCapacity = 30;
  customerCount = 10;

  reserveRoom() {
    let reserveRoom = false;
    if (this.customerCount < this.hotelRoomCapacity) {
      this.customerCount++;
      reserveRoom = true;
    }
    return reserveRoom;
  }
}
