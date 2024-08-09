import { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Pagination } from "@mui/material";
import "./TopSellingProduct.css";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import DazelApi from "../../../../api/DazelApi.js";
import { Link, useLocation } from "react-router-dom";

const TopSellingProduct = () => {
    const { currentLanguage, getTranslate } = useContext(LanguageContext);
    const [tableRows, setTableRows] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        DazelApi.getTopSellingProduct().then(response => setTableRows(response));
    }, []);

    const tableColumns = [
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
                        <h1 className="MuiCustomClass__typography-title">{params.row?.product_name?.[currentLanguage]}</h1>
                        <p className="MuiCustomClass__typography-subtext">{params.row.subtext}</p>
                    </div>
                </div>
            )
        },
        {
            "field": "sales",
            "headerName": "Sales",
            "width": 80,
            "renderHeader": () => <span className="MuiCustomClass__table-header">{getTranslate("table_header_sales_text")}</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <h1 className="MuiCustomClass__typography-title">{params.row.sales}</h1>
                </div>
            )
        },
        {
            "field": "amount",
            "headerName": "Amount",
            "width": 80,
            "renderHeader": () => <span className="MuiCustomClass__table-header">{getTranslate("table_header_amount_text")}</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <h1 className="MuiCustomClass__typography-title">{params.row.amount}</h1>
                </div>
            )
        },
        {
            "field": "price",
            "headerName": "Price",
            "width": 80,
            "renderHeader": () => <span className="MuiCustomClass__table-header">{getTranslate("table_header_price_text")}</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <h1 className="MuiCustomClass__typography-title">{params.row.price}</h1>
                </div>
            )
        },
        {
            "field": "status",
            "headerName": "Status",
            "width": 100,
            "renderHeader": () => <span className="MuiCustomClass__table-header">{getTranslate("table_header_status_text")}</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <h1 className="MuiCustomClass__typography-title">
                        <span className={`tsp__stock-count ${params?.value?.["en"]?.toLowerCase()?.includes("low stock") ? "low" : params?.value?.["en"]?.toLowerCase()?.includes("in stock") ? "stock" : "out of stock"}`}>
                            {params.value[currentLanguage]}
                        </span>

                    </h1>
                </div>
            )
        }
    ];

    const rowsPerPage = 5;
    const totalPages = Math.ceil(tableRows.length / rowsPerPage);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const paginatedRows = tableRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <div className="top-selling-product">
            <div className="tsp__heading">
                <h1 className="tsp__heading-title">
                    {getTranslate("tsp_heading_title_text")}
                    <span className="tsp__heading-title-badges">{getTranslate("tsp_heading_title_badge_text")}</span>
                </h1>
                <div className="tsp__filter">
                    {/* <button className="tsp__filter-btn tsp__filter-date-btn">
                        <i className="fi fi-sr-calendar"></i>
                        {getTranslate("filter_select_date_button_text")}
                    </button> */}
                    {/* <button className="tsp__filter-btn tsp__filter-filter-btn">
                        <i className="fi fi-sr-settings-sliders"></i>
                        {getTranslate("filter_filters_button_text")}
                    </button> */}

                    {}
                    <Link to="/top-selling-product" className="tsp__filter-btn tsp__filter-more-btn">
                        {getTranslate("filter_see_more_button_text")}
                    </Link>
                </div>
            </div>
            <div className="tsp__data-grid-container">
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
            <div className="tsp__pagination-block">
                <h1 className="tsp__pagination-title">
                    {getTranslate("pagination_showing_text")} {((page - 1) * rowsPerPage) + 1}-{Math.min(page * rowsPerPage, tableRows.length)} {getTranslate("pagination_from_text")} {tableRows.length}
                </h1>
                <Pagination count={totalPages} page={page} onChange={handlePageChange} />
            </div>
        </div>
    );
}

export default TopSellingProduct;
