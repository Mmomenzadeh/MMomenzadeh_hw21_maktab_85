import "./Form.css"
const Form = () => {
  return (
    <form>
      <h1>وب اپلیکشن مدیریت مخاطبین</h1>
      <input type="text" placeholder="نام ..."/>
      <input type="text"  placeholder="نام خانوادگی ..." />
      <input type="number" placeholder="شماره تماس ..."  />
      <select>
        <option value="نسبت">نسبت</option>
        <option value="اعضایی خانواده">اعضایی خانواده</option>
        <option value="دوست">دوست</option>
        <option value="همکار">همکار</option>
      </select>
      <input type="email" placeholder="ایمیل ..." />
      <button>اضافه کردن</button>
    </form>
  );
};

export default Form;
