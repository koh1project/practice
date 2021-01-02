import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WindsAnalysis";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");

const summary = Summary.winsAnalysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
