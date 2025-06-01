"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  MoreVertical,
  Calendar,
  FileDown,
  Plus,
  CheckCircle,
  Table,
  BookOpen,
  ArrowLeft,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/card/Index";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/dropdown-menu/Index";
import { Dialog } from "@mui/material";
import ExternalIntegrations from "../components/integration/Index";
const WorkflowImport = () => {
  const [expandedCards, setExpandedCards] = useState({
    import: true,
    aiModel: true,
    dataActions: true,
    approvals: true,
    finalResults: true,
    export: true,
  });

  const [imports, setImports] = useState([{ id: 1, name: "Google Drive" }]);

  const toggleCard = (cardName) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardName]: !prev[cardName],
    }));
  };

  const handleDeleteImport = (importId) => {
    setImports(imports.filter((imp) => imp.id !== importId));
  };

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-white p-8 flex justify-center">
      {/* Navbar */}
      {/* <nav className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Workflow</h1>
        <div className="h-px w-screen bg-gray-200" />
      </nav> */}
      <div className="flex justify-start flex-1/5 ">
        <button
          onClick={() => navigate("/workflow-data")}
          className="m-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-black transition-colors duration-200 hover:bg-gray-300"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="space-y-4 mx-auto flex-4/5">
        {/* Import Card */}
        <Card className="bg-gray-50">
          <CardHeader
            className="cursor-pointer"
            onClick={() => toggleCard("import")}
          >
            <div className="flex justify-between items-center">
              <CardTitle>Import</CardTitle>
              {expandedCards.import ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
          </CardHeader>
          {expandedCards.import && (
            <CardContent>
              {imports.map((imp) => (
                <div
                  key={imp.id}
                  className="flex justify-between items-center mb-4"
                >
                  <span>{imp.name}</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreVertical className="h-5 w-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() => handleDeleteImport(imp.id)}
                      >
                        Delete
                      </DropdownMenuItem>
                      <DropdownMenuItem>Troubleshoot</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
              <button className="text-blue-600 flex items-center gap-2">
                <Plus className="h-4 w-4" /> Browse import options
              </button>
            </CardContent>
          )}
        </Card>

        <div className="flex justify-center">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>

        {/* AI Model Card */}
        <Card className="bg-gray-50">
          <CardHeader
            className="cursor-pointer"
            onClick={() => toggleCard("aiModel")}
          >
            <div className="flex justify-between items-center">
              <CardTitle>AI Model</CardTitle>
              {expandedCards.aiModel ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
          </CardHeader>
          {expandedCards.aiModel && (
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span>Invoices</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  View/modify data
                </button>
              </div>
            </CardContent>
          )}
        </Card>

        <div className="flex justify-center">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>

        {/* Data Actions Card */}
        <Card className="bg-gray-50">
          <CardHeader
            className="cursor-pointer"
            onClick={() => toggleCard("dataActions")}
          >
            <div className="flex justify-between items-center">
              <CardTitle>Data Actions</CardTitle>
              {expandedCards.dataActions ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
          </CardHeader>
          {expandedCards.dataActions && (
            <CardContent>
              <div className="flex gap-4 mb-4 justify-center">
                <Calendar className="h-6 w-6 text-gray-600" />
                <FileDown className="h-6 w-6 text-gray-600" />
              </div>
              <button className="w-full py-2 bg-blue-600 text-white rounded-md">
                Add New Setup
              </button>
            </CardContent>
          )}
        </Card>

        <div className="flex justify-center">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>

        {/* Approvals Card */}
        <Card className="bg-gray-50">
          <CardHeader
            className="cursor-pointer"
            onClick={() => toggleCard("approvals")}
          >
            <div className="flex justify-between items-center">
              <CardTitle>Approvals</CardTitle>
              {expandedCards.approvals ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
          </CardHeader>
          {expandedCards.approvals && (
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Manager Approval</span>
                  </div>
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md">
                    Request
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-300" />
                    <span>Finance Review</span>
                  </div>
                  <button
                    className="px-3 py-1 text-sm bg-gray-200 text-gray-500 rounded-md"
                    disabled
                  >
                    Pending
                  </button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        <div className="flex justify-center">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>

        {/* Final Results Card */}
        <Card className="bg-gray-50">
          <CardHeader
            className="cursor-pointer"
            onClick={() => toggleCard("finalResults")}
          >
            <div className="flex justify-between items-center">
              <CardTitle>Final Results</CardTitle>
              {expandedCards.finalResults ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
          </CardHeader>
          {expandedCards.finalResults && (
            <CardContent>
              <h3 className="font-semibold mb-2">Final Results</h3>
              <p className="text-gray-600">
                Choose fields output to view in final result
              </p>
            </CardContent>
          )}
        </Card>

        <div className="flex justify-center">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>

        {/* Export Card */}
        <Card className="bg-gray-50">
          <CardHeader
            className="cursor-pointer"
            onClick={() => toggleCard("export")}
          >
            <div className="flex justify-between items-center">
              <CardTitle>Export</CardTitle>
              {expandedCards.export ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
          </CardHeader>
          {expandedCards.export && (
            <CardContent>
              <div className="space-y-4">
                {/* Export to Google Sheets */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Table className="h-5 w-5 text-green-600" />
                    <span>Export to Google Sheets</span>
                  </div>
                </div>

                {/* Export to QuickBooks */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span>Export to QuickBooks</span>
                  </div>
                </div>

                {/* Browse all export options */}
                <button
                  className="w-full py-2 bg-blue-600 text-white rounded-md flex items-center justify-center gap-2"
                  onClick={handleClickOpen}
                >
                  <Plus className="h-4 w-4" />
                  Browse all export options
                </button>
              </div>
              <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="md" // Adjust to medium size
                sx={{
                  "& .MuiDialog-paper": {
                    width: "80%", // Custom width
                    maxWidth: "80%", // Ensure it doesn't grow beyond 80% of the viewport
                    margin: "auto", // Center it
                  },
                }}
              >
                {/* <AppBar sx={{ position: 'relative' }}>
                      <Toolbar>
                        <IconButton
                          edge="start"
                          color="inherit"
                          onClick={handleClose}
                          aria-label="close"
                        >
                          <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                          External Integrations
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                          Close
                        </Button>
                      </Toolbar>
                    </AppBar> */}
                <div className="p-4">
                  <ExternalIntegrations />
                </div>
              </Dialog>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default WorkflowImport;
