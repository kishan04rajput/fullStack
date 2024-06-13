export const createInvoiceDataSvc = (data) => {
    const invoice = data.invoice;
    const items = invoice.items;
    const placeOfSupply = data.buyer.billingStateCode;
    const placeOfDelivery = data.buyer.shippingStateCode;

    const invoiceData = {
        ...data,
        items: items.map((item) => {
            item.cgst = "0";
            item.sgst = "0";
            item.igst = "0";
            const taxRate = item.taxRate / 100;
            item.netAmount = item.unitPrice * item.quantity - item.discount;
            item.taxType =
                placeOfSupply === placeOfDelivery ? "CGST & SGST" : "IGST";
            item.taxAmount =  item.netAmount * taxRate;
            if (item.taxType === "CGST & SGST") {
                item.cgst = ((item.netAmount * taxRate) / 2).toFixed(2);
                item.sgst = ((item.netAmount * taxRate) / 2).toFixed(2);
            } else {
                item.igst = item.netAmount * taxRate;
            }
            item.totalAmount = item.netAmount + item.taxAmount;
            return {
                ...item,
            };
        }),
    };

    const wholeTotalAmount = invoiceData.items.reduce(
        (acc, item) => acc + item.totalAmount,
        0
    );
    invoiceData.invoice.totalAmount = wholeTotalAmount.toFixed(2);
    return invoiceData;
};
