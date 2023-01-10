const Qform = () => {
  return (
    <>
      <form>
        <h1> Spatial Query</h1>

        <input type="date" />
        <p>Start date</p>

        <input type="date" />
        <p>End date</p>

        <div>
          <select>
            <option value="0">Select Cities:</option>
            <option value="-1">全台灣</option>
            <option value="1">台北市</option>
            <option value="2">新北市</option>
            <option value="3">桃園市</option>
            <option value="4">新竹市</option>
            <option value="5">新竹縣</option>
            <option value="6">台中市</option>
            <option value="7">彰化市</option>
            <option value="8">南投縣</option>
            <option value="9">雲林縣</option>
            <option value="10">嘉義市</option>
            <option value="11">嘉義縣</option>
            <option value="12">台南市</option>
            <option value="13">高雄市</option>
            <option value="14">屏東縣</option>
            <option value="15">基隆市</option>
            <option value="16">宜蘭縣</option>
            <option value="17">花蓮縣</option>
            <option value="18">台東縣</option>
          </select>
          <p>Your District</p>
        </div>

        <div>
          <select>
            <option value="0">Orders/Suppliers</option>
            <option value="1">Orders</option>
            <option value="2">Suppliers</option>
          </select>
        </div>

        <input type="submit" value={"Find"} />
      </form>
    </>
  );
};

export default Qform;
