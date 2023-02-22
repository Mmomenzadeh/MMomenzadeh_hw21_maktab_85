const Form = () => {
  return (
    <form>
      <input type="text" />
      <input type="text" />
      <input type="number" />
      <select>
        <option value="اعضایی خانواده">اعضایی خانواده</option>
        <option value="دوست">دوست</option>
        <option value="همکار">همکار</option>
      </select>
      <input type="email" />
      <input type="submit" />
    </form>
  );
};

export default Form;
