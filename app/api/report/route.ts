import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir, readFile, access } from "fs/promises";
import { join } from "path";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // In a real application, you would save this to a database
    // For the prototype, we'll save to a JSON file
    const dataDir = join(process.cwd(), "data");
    const reportsFile = join(dataDir, "reports.json");

    // Read existing reports if file exists
    let reports: any[] = [];
    try {
      await access(reportsFile);
      const existingData = await readFile(reportsFile, "utf-8");
      reports = JSON.parse(existingData);
    } catch (error) {
      // File doesn't exist yet, start with empty array
    }

    // Add new report
    const newReport = {
      id: reports.length + 1,
      ...body,
      submittedAt: new Date().toISOString(),
    };
    reports.push(newReport);

    // Ensure data directory exists
    try {
      await mkdir(dataDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    // Write to file
    await writeFile(reportsFile, JSON.stringify(reports, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: "Report submitted successfully",
        id: newReport.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting report:", error);
    return NextResponse.json(
      { success: false, message: "Error submitting report" },
      { status: 500 }
    );
  }
}
