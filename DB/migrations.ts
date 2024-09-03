import {
  addColumns,
  schemaMigrations,
} from "@nozbe/watermelondb/Schema/migrations";

export default schemaMigrations({
  migrations: [
    {
      toVersion: 4,
      steps: [
        addColumns({
          table: "country_codes",
          columns: [{ name: "code", type: "string" }],
        }),
      ],
    },
  ],
});
