import { useState, useEffect, lazy, useMemo } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router";
import Table from "../components/Table/Table";
import SortSelector from "../components/SortSelector/SortSelector";
import PageHeading from "../components/PageHeading/PageHeading";

const initialState = [
  { id: 1, value: 100 },
  { id: 2, value: 400 },
  { id: 3, value: 200 },
  { id: 4, value: 500 },
  { id: 5, value: 300 },
];

const sortOptions = [
  { value: "ascending", label: "Від меншого до більшого" },
  { value: "descending", label: "Від більшого до меншого" },
];

export default function TableView() {
  const navigate = useNavigate();
  const location = useLocation();
  const [expenses, setExpenses] = useState(initialState);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("sortBy") ?? "ascending";

  const updateQuery = (value) => {
    const newParams = value !== "" ? { sortBy: value } : {};
    setSearchParams(newParams);
  };

  const memoizedData = useMemo(
    () =>
      [...expenses].sort((a, b) => {
        return query === "ascending" ? a.value - b.value : b.value - a.value;
      }),
    [expenses, query],
  );

  return (
    <>
      <PageHeading text="Таблиця" />
      <SortSelector
        options={sortOptions}
        onChange={updateQuery}
        value={query}
      />
      <Table items={memoizedData} />

      <Link to="/table/info"> TO info</Link>

      <Outlet />
    </>
  );
}
