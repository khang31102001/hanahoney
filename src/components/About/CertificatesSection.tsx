import { Download, Award, Shield, CheckCircle, ExternalLink } from "lucide-react";
// import nationalMeasurementCert from "./images/Analytica2024-HoneyAnalysis-0.jpg";
// import analyticaCert from "./images/Analytica2024-HoneyAnalysis-0.jpg";
import OptimizedImage from "../ui/optimized-image";

const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      title: "National Measurement Institute",
      subtitle: "Total Antimicrobial Activity Certification",
      description: "Australian Government certified analysis showing >35% Total Activity, confirming exceptional therapeutic properties.",
      details: [
        "Report No: RN1425189",
        "Total Activity: >35% phenol equivalent", 
        "Tested: March 2024",
        "ISO/IEC 17025 Accredited"
      ],
      certImage: "/images/Analytica2024-HoneyAnalysis-0.jpg",
      downloadUrl: "/certificates/Analytica2024-HoneyAnalysis.pdf",
      highlight: "Government Certified"
    },
    {
      id: 2,
      title: "Analytica Laboratories",
      subtitle: "Comprehensive Honey Analysis Report",
      description: "Independent laboratory analysis revealing premium quality honey varieties with exceptional antimicrobial activity levels.",
      details: [
        "Lab Reference: 24-06743",
        "Jarrah Late: 46.5% phenol eq.",
        "RedGum/Marri: 49.6% phenol eq.",
        "Black Butt: 40.2% phenol eq."
      ],
      certImage: "/images/Analytica2024-HoneyAnalysis-0.jpg",
      downloadUrl: "/certificates/NatMeasureCert-Jarrah60.pdf",
      highlight: "Lab Tested"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 rounded-full mb-6">
            <Shield className="w-5 h-5 " />
            <span className="text-sm font-medium ">Quality Assurance</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Certified{" "}
            <span className="">
              Quality & Purity
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our honey undergoes rigorous testing by leading Australian laboratories and government institutions 
            to ensure the highest standards of quality, purity, and therapeutic efficacy.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="space-y-12">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-amber-500 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Certificate Image */}
                <div className="relative bg-muted p-6 lg:p-8">
                  {/* Highlight Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-2 px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-semibold shadow-honey">
                      <Award className="w-3 h-3" />
                      {cert.highlight}
                    </div>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-soft group-hover:shadow-honey transition-all duration-300 bg-background">
                    <OptimizedImage
                      src={cert.certImage}
                      alt={cert.title}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      width={700}
                      height={700}
                    />
                    
                    {/* View Full Document Overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={cert.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-full font-semibold shadow-honey hover:scale-105 transition-transform"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Full Document
                      </a>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-amber-500 font-semibold mb-4">
                      {cert.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Key Details */}
                  <div className="space-y-3 mb-8">
                    {cert.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span className="text-sm text-foreground font-medium">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Download Button */}
                  <a
                    href={cert.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold shadow-honey hover:shadow-soft transition-all duration-300 hover:scale-105 group-hover:bg-amber-600 w-fit"
                  >
                    <Download className="w-4 h-4" />
                    Download Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium text-muted-foreground">
                ISO/IEC 17025 Accredited
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium text-muted-foreground">
                Government Certified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium text-muted-foreground">
                Independently Tested
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;