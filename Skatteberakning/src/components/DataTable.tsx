import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

export function DataTable<TData>({ data, columns }: DataTableProps<TData>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md">
      <div className="overflow-auto rounded-md max-h-[600px]">
        <Table className="min-w-full border-collapse border border-gray-300 text-left">
          <TableHeader className="bg-gray-50">
            {table.getHeaderGroups().map((headerRow) => {
              return (
                <TableRow key={headerRow.id}>
                  {headerRow.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className={`border border-gray-300 px-4 py-2 ${
                        header.colSpan > 1
                          ? "text-center font-semibold"
                          : "font-medium"
                      }`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              );
            })}
          </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="even:bg-gray-50 odd:bg-gray-200">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="border border-gray-300 px-4 py-2"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          
        </Table>
      </div>
    </div>
  );
}
