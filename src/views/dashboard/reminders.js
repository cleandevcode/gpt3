import Calendar from "views/crm/Calendar";

const Reminders = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <h3 className="mb-5">Reminders</h3>
      <Calendar />
    </div>
  );
};

export default Reminders;
