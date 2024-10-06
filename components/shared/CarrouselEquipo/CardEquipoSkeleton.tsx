import { Box, Flex, Skeleton } from "@chakra-ui/react";

export default function CardEquipoSkeleton() {
  return (
    <Flex direction="column" gap="20px" maxW="100%">
      <Skeleton height="0" paddingBottom="110%" />
      <Flex direction="column" gap="10px" px="20px">
        <Skeleton height="24px" width="80%" />
        <Skeleton height="15px" width="60%" />
        <Skeleton height="15px" width="40%" />
      </Flex>
      <Flex direction="column" gap="5px" px="20px">
        <Skeleton height="12px" width="90%" />
        <Skeleton height="12px" width="85%" />
        <Skeleton height="12px" width="80%" />
        <Skeleton height="12px" width="75%" />
      </Flex>
      <Skeleton height="40px" width="120px" ml="20px" />
    </Flex>
  );
}
