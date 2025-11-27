import Image from "next/image";
import Link from "next/link";
import {
  FiUploadCloud,
  FiCheckCircle,
  FiXCircle,
  FiChevronDown,
  FiBold,
  FiItalic,
  FiUnderline,
  FiLink2,
  FiList,
  FiMinus,
} from "react-icons/fi";
import { LuImagePlus } from "react-icons/lu";

const galleryItems = [
  {
    name: "Product_thumbnail_1.png",
    progress: 45,
    status: "error",
    thumb:
      "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Product_thumbnail_2.png",
    progress: 100,
    status: "success",
    thumb:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Product_thumbnail_3.png",
    progress: 100,
    status: "success",
    thumb:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Product_thumbnail_4.png",
    progress: 100,
    status: "success",
    thumb:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Product_thumbnail_5.png",
    progress: 100,
    status: "success",
    thumb:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&q=80",
  },
];

const inputClasses =
  "w-full h-11 rounded-lg bg-[#111420] border border-(--border) px-3 text-sm text-white placeholder:text-(--muted) focus:outline-none focus:border-[var(--accent)] transition";

const Label = ({ children }) => (
  <p className="text-[13px] text-(--muted) font-semibold mb-2">{children}</p>
);

const page = () => {
  return (
    <div className="m-6">
      <div className="card p-6 md:p-8 space-y-8">
        <div className="grid gap-8 xl:grid-cols-12">
          <div className="xl:col-span-7 space-y-6">
            <div>
              <Label>Product Name</Label>
              <input
                type="text"
                placeholder="Type name here"
                className={inputClasses}
              />
            </div>

            <div>
              <Label>Description</Label>
              <div className="space-y-3">
                <div className="flex items-center gap-2 bg-[#0f121b] border border-(--border) rounded-lg px-3 py-2 text-(--muted)">
                  {[FiBold, FiItalic, FiUnderline, FiMinus, FiLink2, FiList].map(
                    (Icon, idx) => (
                      <span
                        key={idx}
                        className={`p-2 rounded-md ${
                          idx === 0
                            ? "bg-(--accent)/15 text-(--accent)"
                            : "bg-white/5 text-(--muted)"
                        }`}
                      >
                        <Icon className="text-[15px]" />
                      </span>
                    )
                  )}
                  <span className="ml-auto text-xs bg-white/5 px-3 py-1 rounded-md">
                    Paragraph
                  </span>
                </div>
                <textarea
                  rows={4}
                  placeholder="Type description here"
                  className={`${inputClasses} h-28 resize-none`}
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label>Category</Label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type Category here"
                    className={`${inputClasses} pr-10`}
                  />
                  <FiChevronDown className="absolute right-3 top-3 text-(--muted)" />
                </div>
              </div>
              <div>
                <Label>Brand</Label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type Brand name here"
                    className={`${inputClasses} pr-10`}
                  />
                  <FiChevronDown className="absolute right-3 top-3 text-(--muted)" />
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label>SKU</Label>
                <input
                  type="text"
                  placeholder="FOX-2883"
                  className={inputClasses}
                />
              </div>
              <div>
                <Label>Stock quantity</Label>
                <input
                  type="number"
                  placeholder="1258"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label>Regular Price</Label>
                <input
                  type="text"
                  placeholder="$500"
                  className={inputClasses}
                />
              </div>
              <div>
                <Label>Sale price</Label>
                <input
                  type="text"
                  placeholder="$450"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label>Tax status</Label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Taxable"
                    className={`${inputClasses} pr-10`}
                  />
                  <FiChevronDown className="absolute right-3 top-3 text-(--muted)" />
                </div>
              </div>
              <div>
                <Label>Tax class</Label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Standard"
                    className={`${inputClasses} pr-10`}
                  />
                  <FiChevronDown className="absolute right-3 top-3 text-(--muted)" />
                </div>
              </div>
            </div>

            <div>
              <Label>Tag</Label>
              <div className="flex flex-wrap gap-2 bg-[#0f121b] border border-(--border) rounded-lg p-3">
                {[
                  "smartwatch x",
                  "Apple x",
                  "Watch x",
                  "smartphone",
                  "iPhone13 max x",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-[#111420] border border-(--border) rounded-full text-sm text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="xl:col-span-5 space-y-6">
            <div className="rounded-2xl border border-(--border) bg-[#0f121b] p-4">
              <div className="relative w-full overflow-hidden rounded-xl border border-(--border) bg-[#111420]">
                <Image
                  src="https://images.unsplash.com/photo-1598900863662-da1c3e6dd9d9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Product hero"
                  width={700}
                  height={700}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-white font-semibold">Product Gallery</p>
                <p className="text-xs text-(--muted)">
                  Upload multiple images; JPG, PNG, GIF allowed.
                </p>
              </div>

              <div className="border border-dashed border-(--border) rounded-xl p-6 bg-[#0f121b] text-center text-(--muted) text-sm">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-(--accent)/10 flex items-center justify-center text-(--accent)">
                    <FiUploadCloud className="text-2xl" />
                  </div>
                  <p className="text-white text-sm">
                    Drop your image here, or{" "}
                    <span className="text-(--accent) cursor-pointer underline">
                      browse
                    </span>
                  </p>
                  <p className="text-xs text-(--muted)">
                    JPG,PNG and GIF files are allowed
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {galleryItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 bg-[#0f121b] border border-(--border) rounded-xl p-3"
                  >
                    <div className="h-11 w-11 rounded-lg overflow-hidden bg-(--surface) border border-(--border) shrink-0">
                      <Image
                        src={item.thumb}
                        alt={item.name}
                        width={44}
                        height={44}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{item.name}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              item.status === "success"
                                ? "bg-[#5ee0c1]"
                                : "bg-[#ef5350]"
                            }`}
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-white w-10 text-right">
                          {item.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      {item.status === "success" ? (
                        <FiCheckCircle className="text-[#5ee0c1] text-xl" />
                      ) : (
                        <FiXCircle className="text-[#ef5350] text-xl" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-3 pt-2">
          <button className="px-6 py-2.5 rounded-lg bg-(--accent) text-white text-sm font-semibold shadow hover:brightness-110 transition">
            Update
          </button>
          <button className="px-6 py-2.5 rounded-lg bg-red-500 text-white text-sm font-semibold shadow hover:brightness-110 transition">
            Delete
          </button>
          <Link href="/products" className="px-6 py-2.5 rounded-lg bg-[#2a2d3c] text-sm text-white border border-(--border) hover:bg-[#323647] transition">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
