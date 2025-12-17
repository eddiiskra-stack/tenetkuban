
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { Trim } from "@/lib/cars";

type TrimDetailsProps = {
  trims: Trim[];
};

export function TrimDetails({ trims }: TrimDetailsProps) {
  if (!trims || trims.length === 0) {
    return <p>Нет доступных комплектаций.</p>;
  }

  const allSpecLabels = [
    ...new Set(trims.flatMap((trim) => trim.specs.map((spec) => spec.label))),
  ];

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full border-collapse">
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-1/4 p-4 font-semibold text-left">
              Комплектация
            </TableHead>
            {trims.map((trim) => (
              <TableHead
                key={trim.name}
                className="w-1/4 p-4 font-semibold text-center"
              >
                {trim.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {allSpecLabels.map((label) => (
            <TableRow key={label} className="border-b">
              <TableCell className="p-4 text-muted-foreground">
                {label}
              </TableCell>
              {trims.map((trim) => {
                const spec = trim.specs.find((s) => s.label === label);
                return (
                  <TableCell key={trim.name} className="p-4 text-center">
                    {spec ? spec.value : "-"}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="p-4 font-semibold">Цена</TableCell>
            {trims.map((trim) => (
              <TableCell
                key={trim.name}
                className="p-4 text-center font-bold text-lg text-primary"
              >
                {trim.price.toLocaleString("ru-RU")} ₽
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            {trims.map((trim) => (
              <TableCell key={trim.name} className="p-4 text-center">
                <Button className="w-full">Получить предложение</Button>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
