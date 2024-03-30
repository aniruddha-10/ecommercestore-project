import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("8e67bfde-c279-4eba-aef3-f03d392d9c0a");

    return (
        <Container>
            <div className="space-y-10 pb-10">
             <Billboard data={billboard} />
            </div>
        </Container>
    )
}

export default HomePage;