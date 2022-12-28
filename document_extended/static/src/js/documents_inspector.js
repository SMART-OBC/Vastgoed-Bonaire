/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { useService } from "@web/core/utils/hooks";
import {
    inspectorFields,
    DocumentsInspector,
} from "@documents/views/inspector/documents_inspector";

import { XLSX_MIME_TYPE } from "@documents_spreadsheet/helpers";

inspectorFields.push("action_by_date","expiration_date", "start_date", "contract_id", "action");
