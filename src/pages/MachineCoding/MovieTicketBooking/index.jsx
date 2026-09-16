import { Button } from "@/components/ui/button";
import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import React, { useState } from "react";
import pageSource from "./index.jsx?raw";

// #region implementation
const SEAT_TYPE = {
  regular: { label: "Regular", price: 300, color: "#EAECF0" },
  premium: { label: "Premium", price: 450, color: "#F7D6D0" },
  recliner: { label: "Recliner", price: 650, color: "#FFCB56" },
};

const SEAT_STATUS = {
  BOOKED: "BOOKED",
  SELECTED: "SELECTED",
  AVAILABLE: "AVAILABLE",
};

function createSeats() {
  const seats = ["A", "B", "C", "D", "E"];
  return seats.map((seat, rowIndex) => {
    let ticket = SEAT_TYPE.regular;

    if (rowIndex >= 3 && rowIndex < 4) {
      ticket = SEAT_TYPE.premium;
    }
    if (rowIndex >= 4) ticket = SEAT_TYPE.recliner;

    return Array.from({ length: 5 }, (_, colIndex) => ({
      id: `${seat}${colIndex}`,
      row: seat,
      number: colIndex,
      config: ticket,
      price: ticket.price,
      status: Math.random() > 0.8 ? SEAT_STATUS.BOOKED : SEAT_STATUS.AVAILABLE,
    }));
  });
}

const MovieTicketBooking = () => {
  const [seats, setSeats] = useState(() => createSeats());

  const handleSeatSelected = (seatId) => {
    setSeats((prevSeats) =>
      prevSeats?.map((seat) =>
        seat.map((item) =>
          item.id === seatId && item.status !== SEAT_STATUS.BOOKED
            ? {
                ...item,
                status:
                  item.status === SEAT_STATUS.SELECTED
                    ? SEAT_STATUS.AVAILABLE
                    : SEAT_STATUS.SELECTED,
              }
            : item,
        ),
      ),
    );
  };

  const selectedSeats = seats
    .flat()
    .filter((seat) => seat.status === SEAT_STATUS.SELECTED);

  const totalPrice = selectedSeats?.reduce((acc, curr) => acc + curr.price, 0);

  const handleBook = () => {
    const ids = selectedSeats.map((seat) => seat.id);
    setSeats((prev) =>
      prev.map((seat) =>
        seat.map((s) =>
          ids.includes(s.id) ? { ...s, status: SEAT_STATUS.BOOKED } : s,
        ),
      ),
    );
  };
  return (
    <>
      <LearningBox>
        <div className="flex flex-col gap-3">
          {seats.map((row) => (
            <div className="flex flex-row items-center gap-2">
              <div className="w-[50px] font-semibold text-blue-500">
                {row[0].row}
              </div>

              {row?.map((cell) => (
                <Button
                  onClick={() => handleSeatSelected(cell.id)}
                  className="w-[50px]"
                  style={{
                    background:
                      cell.status === SEAT_STATUS.BOOKED
                        ? "#F48F68"
                        : cell.status === SEAT_STATUS.SELECTED
                          ? "#7EC151"
                          : cell.config.color,
                    cursor:
                      cell.status === SEAT_STATUS.BOOKED
                        ? "not-allowed"
                        : "pointer",
                  }}
                >
                  {cell.id}
                </Button>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-row gap-2 justify-center items-center">
          <p>
            Selected Seats : {selectedSeats.map((seat) => seat.id).join(", ")}
          </p>
          <p>Tota : {totalPrice}</p>
          <Button onClick={handleBook}>Book Now</Button>
        </div>
      </LearningBox>
      <CodeDisplay codeString={extractSnippet(pageSource)} />
    </>
  );
};

export default MovieTicketBooking;
// #endregion implementation
