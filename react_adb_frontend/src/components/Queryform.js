import { useState } from "react";

const Queryform = ({ onSave, queryparam }) => {
  const [queryData, setQueryData] = useState(queryparam);
  const { festival, item, district } = queryData;

  const [formfestival, setFestival] = useState(festival);
  const [formdistrict, setFormDistrict] = useState(district);
  const [formitem, setFormItem] = useState(item);

  const handleFestivalChange = (event) => {
    const { name, value } = event.target;
    setQueryData((prevData) => ({ ...prevData, [name]: value }));
    setFestival(event.target.value);
  };

  const handleDistrictChange = (event) => {
    const { name, value } = event.target;
    setQueryData((prevData) => ({ ...prevData, [name]: value }));
    setFormDistrict(event.target.value);
  };

  const handleItemChange = (event) => {
    const { name, value } = event.target;
    setQueryData((prevData) => ({ ...prevData, [name]: value }));
    setFormItem(event.target.value);
  };

  const handleSend = () => {
    onSave(queryData);
  };

  return (
    <div>
      <div>
        <h2> Do your Queries!</h2>
      </div>

      <select
        name="formfestival"
        value={formfestival}
        onChange={handleFestivalChange}
      >
        <option value="Xmas">Xmas</option>
        <option value="CNY">CNY</option>
      </select>
      <p>Festival</p>

      <div>
        <select
          name="district"
          value={formdistrict}
          onChange={handleDistrictChange}
        >
          <option value="0">Select Cities:</option>
          <option value="全台灣">全台灣</option>
          <option value="台北市">台北市</option>
          <option value="新北市">新北市</option>
          <option value="桃園市">桃園市</option>
          <option value="新竹市">新竹市</option>
          <option value="新竹縣">新竹縣</option>
          <option value="台中市">台中市</option>
          <option value="彰化市">彰化市</option>
          <option value="南投縣">南投縣</option>
          <option value="雲林縣">雲林縣</option>
          <option value="嘉義市">嘉義市</option>
          <option value="嘉義縣">嘉義縣</option>
          <option value="台南市">台南市</option>
          <option value="高雄市">高雄市</option>
          <option value="屏東縣">屏東縣</option>
          <option value="基隆市">基隆市</option>
          <option value="宜蘭縣">宜蘭縣</option>
          <option value="花蓮縣">花蓮縣</option>
          <option value="台東縣">台東縣</option>
        </select>
        <p>Your District</p>
      </div>

      <div>
        <select name="item" value={formitem} onChange={handleItemChange}>
          <option value="Orders">Orders/Suppliers</option>
          <option value="Orders">Orders</option>
          <option value="Suppliers">Suppliers</option>
        </select>
        <p>Orders/Suppliers</p>
      </div>

      <button type="submit" onClick={handleSend}>
        {" "}
        送出
      </button>
    </div>
  );
};

export default Queryform;
