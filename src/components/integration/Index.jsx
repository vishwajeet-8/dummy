import { useState } from "react";
import {
  CalendarPlus,
  FileText,
  BookOpen,
  Upload,
  Database,
  Grid,
  X,
  ChevronRight,
  Link,
  MessageSquare,
  BookOpenCheck,
  Box,
  Server,
  MessageCircle,
  HardDrive,
  Table2,
  MessagesSquare,
  Boxes,
  Bell,
  CloudCog,
  Circle,
  Loader2,
} from "lucide-react";
import { Button } from "../Button/Index";
import { Card } from "../card/Index";
import { Input } from "../Input/Index";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "../Sheet/Index";
import { Separator } from "../Sheet/Index";
// import Layout from "@/src/Layout";

const ExternalIntegrations = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [odooButtonText, setOdooButtonText] = useState("Connect");
  const [isOdooConnecting, setIsOdooConnecting] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const odooPayload = {
    pages: [
      {
        page_number: 1,
        content: {
          title: "Tax Invoice",
          subtitle: "(ORIGINAL FOR RECIPIENT)",
          customer_name: "ACME Inc",
          journal_type: "sale",
          invoice_details: {
            invoice_no: "ABC/2025-26/36",
            date: "2025-04-08",
          },
          items: [
            {
              sl_no: 1,
              description: "H7 12035 RA 12V 80W (85392120/12035RA)",
              hsn_sac: "85392120",
              part_no: "12035RA",
              quantity: "2 Pcs",
              rate: 166.95,
              per: "Pcs",
              amount: 333.9,
            },
            {
              sl_no: 2,
              description: "HB3 12359 RA 12V 100W P20d (85392120/12359RA)",
              hsn_sac: "85392120",
              part_no: "12359RA",
              quantity: "8 Pcs",
              rate: 173.73,
              per: "Pcs",
              amount: 1389.84,
            },
            {
              sl_no: 3,
              description: "H8 12360 Dv 35w 12v (85392120/12360DV)",
              hsn_sac: "85392120",
              part_no: "12360DV",
              quantity: "2 Pcs",
              rate: 544.06,
              per: "Pcs",
              amount: 1088.12,
            },
            {
              sl_no: 4,
              description: "H1 12484 Ra 12v 100w (85392120/12484RA)",
              hsn_sac: "85392120",
              part_no: "12484RA",
              quantity: "2 Pcs",
              rate: 97.46,
              per: "Pcs",
              amount: 194.92,
            },
            {
              sl_no: 5,
              description: "W5W 12961 BV 12v (Pair) (85392120/12961BV)",
              hsn_sac: "85392120",
              part_no: "12961BV",
              quantity: "4.00 set",
              rate: 73.64,
              per: "set",
              amount: 294.56,
            },
            {
              sl_no: 6,
              description: "H7 12972 Dv 12v 55W (85392120/12972DV)",
              hsn_sac: "85392120",
              part_no: "12972DV",
              quantity: "1 Pcs",
              rate: 481.53,
              per: "Pcs",
              amount: 481.53,
            },

            {
              sl_no: 7,
              description: "Bergmann All Purpose Microfibre Orange (630710)",
              hsn_sac: "630710",
              part_no: "",
              quantity: "1 Pcs",
              rate: 54.0,
              per: "Pcs",
              amount: 54.0,
            },
            {
              sl_no: 8,
              description:
                "Xenon White H1 12v 100w P14.5s (85392120/H1-1200XW)",
              hsn_sac: "85392120",
              part_no: "H1-1200XW",
              quantity: "2 Pcs",
              rate: 101.61,
              per: "Pcs",
              amount: 203.22,
            },
            {
              sl_no: 9,
              description:
                "XENON WHITE H27-889 12V 27W PGJ-13 (85392120/H27-889XW)",
              hsn_sac: "85392120",
              part_no: "H27-889XW",
              quantity: "4 Pcs",
              rate: 144.92,
              per: "Pcs",
              amount: 579.68,
            },

            {
              sl_no: 10,
              description: "Xenon White H7 12v 55w Px26d (85392120)",
              hsn_sac: "85392120",
              part_no: "",
              quantity: "2 Pcs",
              rate: 179.92,
              per: "Pcs",
              amount: 359.84,
            },

            {
              sl_no: 11,
              description: "Excelite H9 12v 65w Pq19-5 (85392120/H9-1201)",
              hsn_sac: "85392120",
              part_no: "H9-1201",
              quantity: "2 Pcs",
              rate: 196.27,
              per: "Pcs",
              amount: 392.54,
            },
            {
              sl_no: 12,
              description:
                "Xenon White 9005 (HB3)12V 100W P20d (85392120/HB3-9005XW)",
              hsn_sac: "85392120",
              part_no: "HB3-9005XW",
              quantity: "7 Pcs",
              rate: 172.45,
              per: "Pcs",
              amount: 1207.15,
            },
          ],
          tax_summary: {
            sgst: 588.63,
            cgst: 588.63,
            round_off: 0.44,
            total_amount: 7757.0,
          },

          amount_in_words:
            "Indian Rupees Seven Thousand Seven Hundred Fifty Seven Only",
          tax_breakdown: [
            {
              hsn_sac: "85392120",
              taxable_value: 6230.74,
              cgst_rate: "9%",
              cgst_amount: 560.77,
              sgst_utgst_rate: "9%",
              sgst_utgst_amount: 560.77,
              total_tax_amount: 1121.54,
            },
            {
              hsn_sac: "85392940",
              taxable_value: 294.56,
              cgst_rate: "9%",
              cgst_amount: 26.51,
              sgst_utgst_rate: "9%",
              sgst_utgst_amount: 26.51,
              total_tax_amount: 53.02,
            },
            {
              hsn_sac: "630710",
              taxable_value: 54.0,
              cgst_rate: "2.50%",
              cgst_amount: 1.35,
              sgst_utgst_rate: "2.50%",
              sgst_utgst_amount: 1.35,
              total_tax_amount: 2.7,
            },
          ],
          total_tax: {
            taxable_value: 6579.3,
            cgst_amount: 588.63,
            sgst_utgst_amount: 588.63,
            total_tax_amount: 1177.26,
          },
          tax_amount_in_words:
            "Indian Rupees One Thousand One Hundred Seventy Seven and Twenty Six paise Only",
          terms_and_conditions: [
            "We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.",
            "Goods once sold will not be taken back.",
            "Cheque bounce will be charged ₹200 per slip.",
            "Interest @18% p.a. will be charged if the payment is not made within stipulated time.",
          ],
          company_bank_details: {
            bank_name: "Axis Bank",
            account_holder_name: "Amba Sales Corporation",
            account_no: "4103115000003143",
            branch_and_ifsc: "Kashmere Gate & KVBL0004103",
          },
          footer: {
            jurisdiction: "SUBJECT TO DELHI JURISDICTION",
            note: "This is a Computer Generated Invoice",
            for: "Amba Sales Corporation",
            signature: "Authorised Signatory",
          },
        },
      },
    ],
  };

  const handleOdooConnect = async () => {
    setIsOdooConnecting(true);
    setOdooButtonText("Connecting");

    try {
      const response = await fetch(
        "https://odoo-invoice-api-g3d4decdfgerc3g3.centralindia-01.azurewebsites.net/api/create_invoice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(odooPayload),
        }
      );

      setIsOdooConnecting(false);

      if (response.ok) {
        setOdooButtonText("Connected");
        setPopupMessage("Data Exported Successfully");
      } else {
        setOdooButtonText("Connect");
        setPopupMessage("Failed to export data");
      }
    } catch (error) {
      console.error("Error connecting to Odoo:", error);
      setIsOdooConnecting(false);
      setOdooButtonText("Connect");
      setPopupMessage("Error exporting data");
    }

    setTimeout(() => setPopupMessage(""), 3000);
  };

  const integrations = [
    {
      id: 1,
      name: "QuickBooks",
      description:
        "Connect your QuickBooks account to automate financial workflows",
      category: "accounting",
      icon: <BookOpenCheck size={24} className="text-blue-600" />,
      formFields: [
        { name: "apiKey", label: "API Key", type: "text" },
        { name: "companyId", label: "Company ID", type: "text" },
      ],
    },
    {
      id: 2,
      name: "Dropbox",
      description: "Seamlessly transfer files to and from your Dropbox account",
      category: "file-transfer",
      icon: <Box size={24} className="text-blue-500" />,
      formFields: [
        { name: "accessToken", label: "Access Token", type: "text" },
        { name: "folder", label: "Default Folder", type: "text" },
      ],
    },
    {
      id: 3,
      name: "MongoDB",
      description:
        "Connect to your MongoDB database for data storage and retrieval",
      category: "database",
      icon: <Server size={24} className="text-green-600" />,
      formFields: [
        { name: "connectionString", label: "Connection String", type: "text" },
        { name: "database", label: "Database Name", type: "text" },
      ],
    },
    {
      id: 7,
      name: "Microsoft Teams",
      description:
        "Send messages and notifications to Microsoft Teams channels",
      category: "communication",
      icon: <MessagesSquare size={24} className="text-blue-500" />,
      formFields: [
        { name: "webhookUrl", label: "Webhook URL", type: "text" },
        { name: "teamId", label: "Team ID", type: "text" },
      ],
    },
    {
      id: 10,
      name: "Zohobooks",
      description:
        "Integrate with Zohobooks for accounting and invoice management",
      category: "accounting",
      icon: <BookOpenCheck size={24} className="text-blue-400" />,
      formFields: [
        { name: "authToken", label: "Authorization Token", type: "text" },
        { name: "organizationId", label: "Organization ID", type: "text" },
      ],
    },
    {
      id: 11,
      name: "CSV Import/Export",
      description: "Import and export data using CSV file format",
      category: "file-transfer",
      icon: <Database size={24} className="text-green-500" />,
      formFields: [
        { name: "delimiter", label: "CSV Delimiter", type: "text" },
        { name: "encoding", label: "File Encoding", type: "text" },
        { name: "defaultPath", label: "Default Export Path", type: "text" },
      ],
    },
    {
      id: 12,
      name: "Auto-Reminders",
      description:
        "Set up automated reminders and notifications for tasks and events",
      category: "communication",
      icon: <Bell size={24} className="text-yellow-600" />,
      formFields: [
        { name: "defaultChannel", label: "Default Channel", type: "text" },
        { name: "frequency", label: "Default Frequency", type: "text" },
        { name: "template", label: "Message Template", type: "textarea" },
      ],
    },
    {
      id: 13,
      name: "SAP",
      description:
        "Integrate with SAP for enterprise resource planning and management",
      category: "erp",
      icon: <Boxes size={24} className="text-teal-600" />,
      formFields: [
        { name: "clientId", label: "Client ID", type: "text" },
        { name: "clientSecret", label: "Client Secret", type: "password" },
        { name: "systemUrl", label: "System URL", type: "text" },
      ],
    },
    {
      id: 14,
      name: "Salesforce",
      description: "Connect to Salesforce for CRM and sales automation",
      category: "crm",
      icon: <CloudCog size={24} className="text-blue-700" />,
      formFields: [
        { name: "clientId", label: "Client ID", type: "text" },
        { name: "clientSecret", label: "Client Secret", type: "password" },
        { name: "instanceUrl", label: "Instance URL", type: "text" },
      ],
    },
    {
      id: 15,
      name: "Odoo",
      description:
        "Integrate with Odoo for comprehensive ERP and business management",
      category: "erp",
      icon: (
        <Circle
          size={24}
          style={{ stroke: "#800000" }}
          strokeWidth={4}
          fill="none"
        />
      ),
      formFields: [
        { name: "url", label: "Odoo Instance URL", type: "text" },
        { name: "db", label: "Database Name", type: "text" },
        { name: "username", label: "Username", type: "text" },
        { name: "apiKey", label: "API Key", type: "password" },
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Integrations", icon: <Grid size={18} /> },
    { id: "accounting", label: "Accounting", icon: <BookOpen size={18} /> },
    { id: "file-transfer", label: "File Transfer", icon: <Upload size={18} /> },
    { id: "database", label: "Database", icon: <Database size={18} /> },
    {
      id: "communication",
      label: "Communication",
      icon: <MessageSquare size={18} />,
    },
    { id: "erp", label: "ERP", icon: <Boxes size={18} /> },
    { id: "crm", label: "CRM", icon: <CloudCog size={18} /> },
    { id: "others", label: "Others", icon: <FileText size={18} /> },
  ].map((category) => ({
    ...category,
    count:
      category.id === "all"
        ? integrations.length
        : integrations.filter((item) => item.category === category.id).length,
  }));

  const filteredIntegrations =
    activeCategory === "all"
      ? integrations
      : integrations.filter((item) => item.category === activeCategory);

  return (
    <div className="p-6 max-w-6xl mx-auto overflow-y-scroll">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">External Integrations</h1>
      </div>

      <Separator className="mb-6" />

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className="flex items-center gap-2 group relative"
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon}
            <span>{category.label}</span>
            <span
              className={`ml-2 px-2 py-0.5 text-xs rounded-full 
              ${
                activeCategory === category.id
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
              }`}
            >
              {category.count}
            </span>
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredIntegrations.map((integration) => (
          <Card
            key={integration.id}
            className="p-4 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center">
                {integration.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{integration.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {integration.description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end pt-3 border-t">
              <Button
                size="sm"
                className={`flex items-center gap-2 ${
                  integration.name === "Odoo" && odooButtonText === "Connected"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-black hover:bg-gray-800"
                }`}
                onClick={
                  integration.name === "Odoo"
                    ? handleOdooConnect
                    : () => setSelectedIntegration(integration)
                }
                disabled={integration.name === "Odoo" && isOdooConnecting}
              >
                {integration.name === "Odoo" && isOdooConnecting ? (
                  <>
                    <Loader2 className="animate-spin text-white" size={14} />
                    <span className="text-white">{odooButtonText}</span>
                  </>
                ) : (
                  <>
                    <Link className="text-white" size={14} />
                    <span className="text-white">
                      {integration.name === "Odoo" ? odooButtonText : "Connect"}
                    </span>
                  </>
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {popupMessage && (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm flex items-center justify-between">
          <span
            className={`text-sm ${
              popupMessage.includes("Success")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {popupMessage}
          </span>
          <button
            onClick={() => setPopupMessage("")}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <Sheet
        open={selectedIntegration !== null}
        onOpenChange={() => setSelectedIntegration(null)}
      >
        <SheetContent className="sm:max-w-[440px]">
          {selectedIntegration && (
            <>
              <SheetHeader>
                <SheetTitle className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                    {selectedIntegration.icon}
                  </div>
                  {selectedIntegration.name} Integration
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                {selectedIntegration.formFields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label className="text-sm font-medium">{field.label}</label>
                    <Input
                      type={field.type}
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>

              <SheetFooter className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
                <Button className="w-full">
                  Connect Integration
                  <ChevronRight size={16} className="ml-2" />
                </Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ExternalIntegrations;
