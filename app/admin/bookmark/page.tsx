import Layout from "@/app/components/layouts/admins/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  return (
    <Layout>
      {/* header */}
      <div className="flex justify-between">
        <div className="flex items-center gap-3 mb-24">
          <FontAwesomeIcon icon={faBookmark} width={35} />
          <h1 className="text-3xl font-semibold">Bookmarks</h1>
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra table-lg">
          {/* head */}
          <thead className="">
            <tr className="border-b border-white">
              <th className="w-[3rem] text-center font-semibold text-base">
                #
              </th>
              <th className="w-[5rem] text-center font-semibold text-base">
                User
              </th>
              <th className="w-[14rem] text-center font-semibold text-base">
                Title
              </th>
              <th className="w-[18rem] text-center font-semibold text-base">
                Description
              </th>
              <th className="w-[7rem] text-center font-semibold text-base">
                Tag
              </th>
              <th className="w-[7rem] text-center font-semibold text-base">
                Categories
              </th>
              <th className="w-[7rem] text-center font-semibold text-base">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="border-b border-slate-600">
              <th className="text-center">1</th>
              <td className="text-center">@osyi</td>
              <td className="text-center">Cy Ganderton</td>
              <td className="text-center">Quality Control Specialist</td>
              <td className="text-center">
                <div className="badge badge-secondary">secondary</div>
              </td>
              <td className="text-center">
                <div className="badge badge-secondary">secondary</div>
                <div className="badge badge-accent">accent</div>
              </td>
              <td className="text-center">
                <div className="flex w-full flex-col gap-2">
                  <button className="btn btn-sm btn-outline btn-secondary">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Page;
