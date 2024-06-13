import React, { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

function App() {
  const [companyLogo, setCompanyLogo] = useState(
    "https://i.pinimg.com/474x/40/26/6a/40266aa91d83b991faee5c9529858a59.jpg"
  );
  const [invoiceNumber, setInvoiceNumber] = useState("INV12345");
  const [invoiceDate, setInvoiceDate] = useState("01/01/2022");
  const [orderNumber, setOrderNumber] = useState("ORD12345");
  const [orderDate, setOrderDate] = useState("01/01/2022");
  const [sellerName, setSellerName] = useState("Seller Inc.");
  const [sellerAddr, setSellerAddr] = useState(
    "123 Seller Street, Seller City, Seller State, Seller Country"
  );
  const [sellerPanNo, setSellerPanNo] = useState("ABCDE1234F");
  const [sellerGstNo, setSellerGstNo] = useState("27ABCDE1234F1Z5");
  const [buyerBillingName, setBuyerBillingName] = useState("Buyer Inc.");
  const [billingAddress, setBillingAddress] = useState(
    "123 Buyer Street, Buyer City, Buyer State, Buyer Country"
  );
  const [billingStateCode, setBillingStateCode] = useState("27");
  const [shippingName, setShippingName] = useState("Buyer Inc.");
  const [shippingAddress, setShippingAddress] = useState(
    "123 Buyer Street, Buyer City, Buyer State, Buyer Country"
  );
  const [shippingStateCode, setShippingStateCode] = useState("27");
  const [signature, setSignature] = useState(
    "https://pnghq.com/wp-content/uploads/signature-png-images-free-download-png-file.png"
  );
  const [items, setItems] = useState([
    {
      description: "itemName",
      unitPrice: "100",
      quantity: "1",
      discount: "10",
      taxRate: "18",
    },
  ]);

  //add new product
  const addItem = () => {
    setItems([
      ...items,
      {
        description: "",
        unitPrice: "",
        quantity: "",
        discount: "",
        taxRate: "",
      },
    ]);
  };

  //update indexed value of the element
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...items];
    list[index][name] = value;
    setItems(list);
  };

  //delete product
  const handleRemoveClick = (index) => {
    const list = [...items];
    list.splice(index, 1);
    setItems(list);
  };

  //update value of state
  function handleUpdate(event) {
    const { id, value } = event.target;
    switch (id) {
      case "companyLogo":
        setCompanyLogo(value);
        break;
      case invoiceNumber:
        setInvoiceNumber(value);
        break;
      case invoiceDate:
        setInvoiceDate(value);
        break;
      case orderNumber:
        setOrderNumber(value);
        break;
      case orderDate:
        setOrderDate(value);
        break;
      case sellerName:
        setSellerName(value);
        break;
      case sellerAddr:
        setSellerAddr(value);
        break;
      case sellerPanNo:
        setSellerPanNo(value);
        break;
      case sellerGstNo:
        setSellerGstNo(value);
        break;
      case buyerBillingName:
        setBuyerBillingName(value);
        break;
      case billingAddress:
        setBillingAddress(value);
        break;
      case billingStateCode:
        setBillingStateCode(value);
        break;
      case shippingName:
        setShippingName(value);
        break;
      case shippingAddress:
        setShippingAddress(value);
        break;
      case shippingStateCode:
        setShippingStateCode(value);
        break;
      case signature:
        setSignature(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (items.length === 0) {
      alert("Please add atleast one product!");
      return;
    }

    for (let item of items) {
      if (item.description.length === 0) {
        alert("Please fill details of all products!");
        return; // Stop program flow
      }
    }

    axios({
      url: "/invoice/create", // your url
      method: "POST",
      responseType: "blob", // important
      data: {
        companyLogo: companyLogo,
        invoice: {
          invoiceDetails: {
            invoiceNumber: invoiceNumber,
            invoiceDate: invoiceDate,
          },
          orderDetails: {
            orderNumber: orderNumber,
            orderDate: orderDate,
          },
          items: items,
        },
        seller: {
          sellerName: sellerName,
          address: sellerAddr,
          panNo: sellerPanNo,
          gstNo: sellerGstNo,
        },
        buyer: {
          billingName: buyerBillingName,
          billingAddress: billingAddress,
          billingStateCode: billingStateCode,
          shippingName: shippingName,
          shippingAddress: shippingAddress,
          shippingStateCode: shippingStateCode,
        },
        signature: signature,
      },
    }).then((response) => {
      const pdfBlob = new Blob([response.data], {
        type: "application/pdf",
      });
      saveAs(pdfBlob, "output.pdf");
    });
  }
  return (
    <div className="p-2">
      <h1 className="h1 text-center">INVOICE GENERATOR</h1>
      <form>
        {/* Company Details */}
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="companyLogo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company Logo URL:
            </label>
            <input
              type="text"
              id="companyLogo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={companyLogo}
              onChange={handleUpdate}
              required
            />
          </div>
          <div>
            <label
              htmlFor="invoiceNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Invoice Number:
            </label>
            <input
              type="text"
              id="invoiceNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={invoiceNumber}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="invoiceDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Invoice Date:
            </label>
            <input
              type="text"
              id="invoiceDate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={invoiceDate}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="orderNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Order Number:
            </label>
            <input
              type="text"
              id="orderNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={orderNumber}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="orderDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Order Date:
            </label>
            <input
              type="text"
              id="orderDate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={orderDate}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="sellerName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seller Name:
            </label>
            <input
              type="text"
              id="sellerName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={sellerName}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="sellerAddr"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seller Address:
            </label>
            <input
              type="text"
              id="sellerAddr"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={sellerAddr}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="sellerPanNo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seller PAN Number:
            </label>
            <input
              type="text"
              id="sellerPanNo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={sellerPanNo}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="sellerGstNo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seller GST Number:
            </label>
            <input
              type="text"
              id="sellerGstNo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={sellerGstNo}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="buyerBillingName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Buyer Billing Name:
            </label>
            <input
              type="text"
              id="buyerBillingName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={buyerBillingName}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="billingAddress"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Billing Address:
            </label>
            <input
              type="text"
              id="billingAddress"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={billingAddress}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="billingStateCode"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Billing State Code:
            </label>
            <input
              type="text"
              id="billingStateCode"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={billingStateCode}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="shippingName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Shipping Name:
            </label>
            <input
              type="text"
              id="shippingName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={shippingName}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="shippingAddress"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Shipping Address:
            </label>
            <input
              type="text"
              id="shippingAddress"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={shippingAddress}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="shippingStateCode"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Shipping State Code:
            </label>
            <input
              type="text"
              id="shippingStateCode"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={shippingStateCode}
              required
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label
              htmlFor="signature"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Authorized Signature URL:
            </label>
            <input
              type="text"
              id="signature"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={signature}
              required
              onChange={handleUpdate}
            />
          </div>
        </div>

        {/* add product details*/}
        <div>
          {items.map((item, i) => (
            <div
              key={i}
              className="grid gap-2 mb-2 md:grid-cols-3 border border-gray-700 p-2 rounded"
            >
              <input
                name="description"
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleInputChange(e, i)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                name="unitPrice"
                placeholder="Unit Price"
                value={item.unitPrice}
                onChange={(e) => handleInputChange(e, i)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                name="quantity"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) => handleInputChange(e, i)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                name="discount"
                placeholder="Discount"
                value={item.discount}
                onChange={(e) => handleInputChange(e, i)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                name="taxRate"
                placeholder="Tax Rate"
                value={item.taxRate}
                onChange={(e) => handleInputChange(e, i)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => handleRemoveClick(i)}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete Product
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addItem}
          id="addItem"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add Product
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          GENERATE INVOICE
        </button>
      </form>
    </div>
  );
}

export default App;
