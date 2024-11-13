import { authors, courses } from "../../../tools/mockData";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import ManageCoursePage from "./ManageCoursePage";
import { Provider } from "react-redux";
import React from "react";
import { enableFetchMocks } from "jest-fetch-mock";
import store from "../../redux/configureStore";

enableFetchMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it("sets error when attempting to save an empty title field", async () => {
  fetch.mockResponseOnce(JSON.stringify(courses));
  fetch.mockResponseOnce(JSON.stringify(authors));
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ManageCoursePage authors={authors} />
      </BrowserRouter>
    </Provider>
  );

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeTruthy();
  });

  fireEvent.click(screen.getByRole("button", { name: "Save" }));
  screen.getByText("Title is required.");
  //   screen.debug();
});
