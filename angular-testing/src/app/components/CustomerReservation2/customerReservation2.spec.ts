import { from } from 'rxjs';
import { CustomerReservation } from '../CustomerReservation1/customerReservation.component';

import { CustomerReservation2 } from './customerReservation2';

xdescribe('room Reservation', () => {
  it('testing room to be reserved or not', () => {
    // Arrange
    let custReserved = new CustomerReservation2();

    // Act
    let isReserved = custReserved.reserveRoom();

    // Assert
    expect(isReserved).toBeTruthy();
  });
});
