import { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Pagination } from "@mui/material";
import "./RecentOrders.css";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import DazelApi from "../../../../api/DazelApi.js";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const RecentOrders = () => {
    const { currentLanguage, getTranslate } = useContext(LanguageContext);
    const [tableRows, setTableRows] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [page, setPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(false);
    const [currentDataSelectedProduct, setCurrentDataSelectedProduct] = useState({});

    useEffect(() => {
        DazelApi.getRecentOrders().then(response => setTableRows(response));
    }, []);

    const computeTimeAgo = (timestamp) => {
        const timestampSeconds = Math.floor((Date.now() - (timestamp * 1000)) / 1000);
        const intervals = [
            { "label": getTranslate("topbar_menu_notification_time_second"), "divisor": 1 },
            { "label": getTranslate("topbar_menu_notification_time_minute"), "divisor": 60 },
            { "label": getTranslate("topbar_menu_notification_time_hour"), "divisor": 3600 },
            { "label": getTranslate("topbar_menu_notification_time_day"), "divisor": 86400 }
        ];
        for (let idx = intervals.length - 1; idx >= 0; idx--) {
            const { label, divisor } = intervals[idx];
            const interval = Math.floor(timestampSeconds / divisor);
            if (interval > 0)
                return `${interval} ${label} ${getTranslate("topbar_menu_notification_time_ago")}`;
        }
        return getTranslate("topbar_menu_notification_time_just_now");
    }

    const handleCheckboxChange = (orderId) => {
        setSelectedRows(prevSelectedRows => {
            if (prevSelectedRows.includes(orderId))
                return prevSelectedRows.filter(id => id !== orderId);
            else
                return [...prevSelectedRows, orderId];
        });
    };

    const handleSelectAllChange = (event) => {
        const isChecked = event.target.checked;
        setSelectAll(isChecked);
        setSelectedRows(isChecked ? tableRows.map(row => row.orderId) : []);
    };

    const handleShowDetail = (currentRows) => {
        setSelectedProduct(true);
        setCurrentDataSelectedProduct(currentRows);
    }

    useEffect(() => {
        console.log(currentDataSelectedProduct);
    });

    const handleCloseDetail = () => {
        setSelectedProduct(false);
    }

    const tableColumns = [
        {
            "field": "orderId",
            "width": 100,
            "sortable": false,
            "renderHeader": () => (
                <span className="MuiCustomClass__table-header">
                    <input
                        type="checkbox"
                        className="MuiCustomClass__table-header-checkbox"
                        checked={selectAll}
                        onChange={handleSelectAllChange}
                    />
                    {getTranslate("table_header_order_id_text")}
                </span>
            ),
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex-row">
                    <input
                        type="checkbox"
                        className="MuiCustomClass__table-header-checkbox"
                        checked={selectedRows.includes(params.row.orderId)}
                        onChange={() => handleCheckboxChange(params.row.orderId)}
                    />
                    <div className="MuiCustomClass__typography">
                        <h1 className="MuiCustomClass__typography-title">{params.row.orderId}</h1>
                    </div>
                </div>
            )
        },
        {
            "field": "image",
            "headerName": "Product",
            "width": 250,
            "sortable": true,
            "renderHeader": () => <span className="MuiCustomClass__table-header">{getTranslate("table_header_product_text")}</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__box">
                    <div className="MuiCustomClass__img-box">
                        <img className="MuiCustomClass__img" src={params.value} alt="product" />
                    </div>
                    <div className="MuiCustomClass__typography">
                        <h1 className="MuiCustomClass__typography-title">{params.row.product_name[currentLanguage]}</h1>
                        <p className="MuiCustomClass__typography-subtext">{params.row.subtext[currentLanguage]}</p>
                    </div>
                </div>
            )
        },
        {
            "field": "date",
            "headerName": "Date",
            "width": 100,
            "renderHeader": () => <span className="MuiCustomClass__table-header">{getTranslate("table_header_date_text")}</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <h1 className="MuiCustomClass__typography-title">{computeTimeAgo(params.row.date)}</h1>
                </div>
            )
        },
        {
            "field": "customer",
            "headerName": "Customer",
            "width": 150,
            "renderHeader": () => <span className="MuiCustomClass__table-header">{getTranslate("table_header_customer_text")}</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <div className="MuiCustomClass__typography">
                        <h1 className="MuiCustomClass__typography-title">{params.row.customer}</h1>
                        <p className="MuiCustomClass__typography-subtext">{params.row.customer_email}</p>
                    </div>
                </div>
            )
        },
        {
            "field": "total",
            "headerName": "Total",
            "width": 100,
            "renderHeader": () => <span className="MuiCustomClass__table-header">{getTranslate("table_header_total_text")}</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <h1 className="MuiCustomClass__typography-title">{params.row.total}</h1>
                </div>
            )
        },
        {
            "field": "payment",
            "headerName": "Payment",
            "width": 100,
            "renderHeader": () => <span className="MuiCustomClass__table-header">{getTranslate("table_header_payment_text")}</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <h1 className="MuiCustomClass__typography-title">{params.row.payment}</h1>
                </div>
            )
        },
        {
            "field": "status",
            "headerName": "Status",
            "width": 120,
            "renderHeader": () => <span className="MuiCustomClass__table-header">{getTranslate("table_header_status_text")}</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <h1 className="MuiCustomClass__typography-title">
                        <span className={`ro__status ${params?.value?.["en"]?.toLowerCase()?.includes("processing") ? "processing" : params?.value?.["en"]?.toLowerCase()?.includes("shipped") ? "shipped" : params?.value?.["en"]?.toLowerCase()?.includes("delivered") ? "delivered" : "cancelled"}`}>
                            {params.value[currentLanguage]}
                        </span>
                    </h1>
                </div>
            )
        },
        {
            "field": "action",
            "headerName": "Action",
            "width": 100,
            "sortable": false,
            "renderHeader": () => <span className="MuiCustomClass__table-header">{getTranslate("table_header_action_text")}</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex-row">
                    <button className="MuiCustomClass__btn" onClick={() => handleShowDetail(params.row)}>
                        <i className="fi fi-sr-eye"></i>
                    </button>
                    <button className="MuiCustomClass__btn" onClick={() => handleDelete(params.id)}>
                        <i className="fi fi-sr-trash"></i>
                    </button>
                </div>
            )
        },
    ];

    const handleDelete = (id) => {
        setTableRows(prevRows => prevRows.filter((row) => row.id !== id));
    };

    const rowsPerPage = 10;
    const totalPages = Math.ceil(tableRows.length / rowsPerPage);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const paginatedRows = tableRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <div className="recent-orders">
            <div className="ro__heading">
                <h1 className="ro__heading-title">
                    Recent Orders
                    <span className="ro__heading-title-badges">+2 Orders</span>
                </h1>
                <div className="ro__filter">
                    {/* <button className="ro__filter-btn ro__filter-filter-btn">
                        <i className="fi fi-sr-settings-sliders"></i>
                        Filters
                    </button> */}
                    <Link to="/recent-orders" className="ro__filter-btn ro__filter-more-btn">
                        {getTranslate("filter_see_more_button_text")}
                    </Link>
                </div>
            </div>
            <div className="ro__data-grid-container">
                <DataGrid
                    rows={paginatedRows}
                    columns={tableColumns}
                    hideFooterSelectedRowCount
                    disableSelectionOnClick
                    hideFooterPagination={true}
                    hideFooter={true}
                    rowHeight={80}
                />
            </div>
            <div className="ro__pagination-block">
                <h1 className="ro__pagination-title">
                    {getTranslate("pagination_showing_text")} {((page - 1) * rowsPerPage) + 1}-{Math.min(page * rowsPerPage, tableRows.length)} {getTranslate("pagination_from_text")} {tableRows.length}
                </h1>
                <Pagination count={totalPages} page={page} onChange={handlePageChange} />
            </div>

            {selectedProduct && createPortal(
                <div className="recent-orders__dialog" onClick={() => handleCloseDetail()}>
                    <div className="recent-orders__dialog-container" onClick={(e)=> e.stopPropagation()}>
                        <h1 className="recent-orders__title">
                            <span className="recent-orders__title order_id">{currentDataSelectedProduct.orderId}</span>
                            <span className="recent-orders__title product_name">{currentDataSelectedProduct.product_name[currentLanguage]}</span>
                        </h1>
                        <div className="recent-orders__dialog-img-box">
                            <img src={currentDataSelectedProduct.image} className="recent-orders__dialog-img" alt="" />
                        </div>
                        <p className="recent-orders__description">
                            <span className="recent-orders__column-name">
                                Subtext:
                            </span>
                            {currentDataSelectedProduct.subtext[currentLanguage]}
                        </p>
                        <p className="recent-orders__description">
                            <span className="recent-orders__column-name">
                                Total:
                            </span>
                            {currentDataSelectedProduct.total}
                        </p>
                        <p className="recent-orders__description">
                            <span className="recent-orders__column-name">
                                Payment:
                            </span>
                            {currentDataSelectedProduct.payment}
                        </p>
                        <p className="recent-orders__description">
                            <span className="recent-orders__column-name">
                                Status:
                            </span>
                            {currentDataSelectedProduct.status[currentLanguage]}
                        </p>
                        <p className="recent-orders__description">
                            <span className="recent-orders__column-name">
                                Customer:
                            </span>
                            {currentDataSelectedProduct.customer}
                        </p>

                        <p className="recent-orders__description">
                            <span className="recent-orders__column-name">
                                Customer Email:
                            </span>
                            {currentDataSelectedProduct.customer_email}
                        </p>
                        <p className="recent-orders__description">
                            <span className="recent-orders__column-name">
                                Data:
                            </span>
                            {computeTimeAgo(currentDataSelectedProduct.date)}
                        </p>
                        <button className="recent-orders__dialog-close" onClick={() => handleCloseDetail()}>
                            <i class="fi fi-sr-cross"></i>
                        </button>
                    </div>
                </div>
                , document.body)}
        </div>
    );
}

export default RecentOrders;
